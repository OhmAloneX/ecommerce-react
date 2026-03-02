import React, { useState, useEffect, useMemo } from "react";
import "./datatable.css";

export default function ProductTable() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null); // ✅ side panel
  const itemsPerPage = 10;

  // Load data
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(json => setItems(json))
      .catch(err => console.error(err));
  }, []);

  // Filter
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  // Sort
  const sortedItems = useMemo(() => {
    const sortable = [...filteredItems];
    if (sortConfig.key) {
      sortable.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (typeof aVal === "number") {
          return sortConfig.direction === "ascending"
            ? aVal - bVal
            : bVal - aVal;
        }

        return sortConfig.direction === "ascending"
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      });
    }
    return sortable;
  }, [filteredItems, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedItems.slice(start, start + itemsPerPage);
  }, [sortedItems, currentPage]);

  // Sorting
  const requestSort = key => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  // Row selection
  const handleSelectRow = id => {
    setSelectedRows(prev =>
      prev.includes(id)
        ? prev.filter(r => r !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    const pageIds = paginatedItems.map(i => i.id);
    const allSelected = pageIds.every(id => selectedRows.includes(id));

    setSelectedRows(prev =>
      allSelected
        ? prev.filter(id => !pageIds.includes(id))
        : [...new Set([...prev, ...pageIds])]
    );
  };

  // Sorting arrows
  const renderSortArrow = key => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "ascending" ? " ▲" : " ▼";
  };

  // =========================
  // DRAG & DROP (Improved)
  // =========================
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Required
  };

  const handleDrop = (dropIndex) => {
    if (draggedIndex === null) return;

    const globalStart = (currentPage - 1) * itemsPerPage;
    const updatedItems = [...items];

    const fromIndex = globalStart + draggedIndex;
    const toIndex = globalStart + dropIndex;

    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);

    setItems(updatedItems);
    setDraggedIndex(null);
  };

  // =========================
  // SIDE PANEL
  // =========================
  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  const closePanel = () => {
    setSelectedItem(null);
  };

  return (
    <div className="table-container">

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="search-input"
      />

      {/* Table */}
      <table className="product-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  paginatedItems.length > 0 &&
                  paginatedItems.every(i => selectedRows.includes(i.id))
                }
              />
            </th>
            <th onClick={() => requestSort("id")}>ID{renderSortArrow("id")}</th>
            <th onClick={() => requestSort("name")}>Product{renderSortArrow("name")}</th>
            <th onClick={() => requestSort("price")}>Price{renderSortArrow("price")}</th>
            <th onClick={() => requestSort("category")}>Category{renderSortArrow("category")}</th>
          </tr>
        </thead>

        <tbody>
          {paginatedItems.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No products found
              </td>
            </tr>
          ) : (
            paginatedItems.map((item, index) => (
              <tr
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
                onClick={() => handleRowClick(item)}
              >
                <td onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleSelectRow(item.id)}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              fontWeight: currentPage === i + 1 ? "bold" : "normal"
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage(p => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* =========================
          SLIDING SIDE PANEL
      ========================= */}
      <div className={`side-panel ${selectedItem ? "active" : ""}`}>
        {selectedItem && (
          <>
            <h2>Product Details</h2>
            <p><strong>ID:</strong> {selectedItem.id}</p>
            <p><strong>Name:</strong> {selectedItem.name}</p>
            <p><strong>Price:</strong> {selectedItem.price}</p>
            <p><strong>Category:</strong> {selectedItem.category}</p>
            <button onClick={closePanel}>Close</button>
          </>
        )}
      </div>

    </div>
  );
}