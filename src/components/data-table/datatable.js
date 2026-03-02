import { useState, useMemo } from "react";
import "./datatable.css";

export default function ProductTable({ items = [] }) {
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 🔍 Filter
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  // 🔄 Sort
  const sortedItems = useMemo(() => {
    const sortable = [...filteredItems];
    if (sortConfig.key) {
      sortable.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "ascending" ? aValue - bValue : bValue - aValue;
        }
        return sortConfig.direction === "ascending"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue));
      });
    }
    return sortable;
  }, [filteredItems, sortConfig]);

  // 🔢 Pagination
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedItems.slice(start, start + itemsPerPage);
  }, [sortedItems, currentPage]);

  // 🔽 Request sort
  const requestSort = key => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") direction = "descending";
    setSortConfig({ key, direction });
  };

  // ✅ Row selection
  const handleSelectRow = id => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  // ✅ Select all on current page
  const handleSelectAll = () => {
    const pageIds = paginatedItems.map(item => item.id);
    const allSelected = pageIds.every(id => selectedRows.includes(id));
    setSelectedRows(prev =>
      allSelected ? prev.filter(id => !pageIds.includes(id)) : [...prev, ...pageIds]
    );
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
                checked={paginatedItems.length > 0 && paginatedItems.every(item => selectedRows.includes(item.id))}
              />
            </th>
            <th onClick={() => requestSort("id")}>ID</th>
            <th onClick={() => requestSort("name")}>Product Name</th>
            <th onClick={() => requestSort("price")}>Price (Php)</th>
            <th onClick={() => requestSort("category")}>Category</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>No products found</td>
            </tr>
          ) : (
            paginatedItems.map(item => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" checked={selectedRows.includes(item.id)} onChange={() => handleSelectRow(item.id)} />
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
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Prev</button>
        {[...Array(totalPages)].map((_, idx) => (
          <button key={idx} onClick={() => setCurrentPage(idx + 1)} style={{ fontWeight: currentPage === idx + 1 ? "bold" : "normal" }}>
            {idx + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}