"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem as SelectItem,
  TextField,
} from "@mui/material";
import { MoreVertical } from "lucide-react";

type Order = {
  id: number;
  name: string;
  email: string;
  phone: string;
  destination: string;
  date: string;
  travelers: number;
  specialRequest: string;
  status: string;
};

const initialOrders: Order[] = [
  {
    id: 1,
    name: "Rohit",
    email: "rohit@example.com",
    phone: "9800000001",
    destination: "Pokhara",
    date: "2025-09-01",
    travelers: 3,
    specialRequest: "Window seats",
    status: "Pending",
  },
  {
    id: 2,
    name: "Sita",
    email: "sita@example.com",
    phone: "9800000002",
    destination: "Chitwan",
    date: "2025-09-05",
    travelers: 2,
    specialRequest: "Vegetarian food",
    status: "Confirmed",
  },
  {
    id: 3,
    name: "Ram",
    email: "ram@example.com",
    phone: "9800000003",
    destination: "Lumbini",
    date: "2025-09-10",
    travelers: 4,
    specialRequest: "Extra luggage",
    status: "Pending",
  },
];

export default function OrdersManagement() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    order: Order
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrder(order);
    setNewStatus(order.status);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const handleChangeStatusClick = () => {
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleConfirmStatusChange = () => {
    if (selectedOrder) {
      setOrders(
        orders.map((o) =>
          o.id === selectedOrder.id ? { ...o, status: newStatus } : o
        )
      );
    }
    setOpenDialog(false);
  };

  // Filtering
  const filteredOrders = orders.filter(
    (o) =>
      (o.name.toLowerCase().includes(search.toLowerCase()) ||
        o.email.toLowerCase().includes(search.toLowerCase()) ||
        o.destination.toLowerCase().includes(search.toLowerCase())) &&
      (statusFilter === "All" || o.status === statusFilter)
  );

  // Badge style for status
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium";
      case "Confirmed":
        return "bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium";
      case "Completed":
        return "bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium";
      case "Cancelled":
        return "bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium";
      default:
        return "bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium";
    }
  };

  return (
    <div className="p-6">
      {/* Header with search + filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <h2 className="text-2xl font-semibold">Tour & Travel Orders</h2>
        <div className="flex gap-3">
          <TextField
            size="small"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FormControl size="small">
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              label="Status"
              onChange={(e) => setStatusFilter(e.target.value)}
              sx={{ minWidth: 130 }}
            >
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Confirmed">Confirmed</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="overflow-x-auto">
        <TableContainer component={Paper} className="rounded-2xl shadow-md">
          <Table>
            <TableHead className="bg-gray-100">
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Travelers</TableCell>
                <TableCell>Special Request</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <TableRow key={order.id} hover>
                    <TableCell>{order.name}</TableCell>
                    <TableCell>{order.email}</TableCell>
                    <TableCell>{order.phone}</TableCell>
                    <TableCell>{order.destination}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.travelers}</TableCell>
                    <TableCell>{order.specialRequest}</TableCell>
                    <TableCell>
                      <span className={getStatusClass(order.status)}>
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={(e) => handleMenuOpen(e, order)}>
                        <MoreVertical className="w-5 h-5" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={9}
                    align="center"
                    className="text-gray-500"
                  >
                    No orders found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleChangeStatusClick}>Change Status</MenuItem>
      </Menu>

      {/* Change Status Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Change Order Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update status for{" "}
            <span className="font-semibold">{selectedOrder?.name}</span>
          </DialogContentText>
          <FormControl fullWidth className="mt-4">
            <InputLabel>Status</InputLabel>
            <Select
              value={newStatus}
              label="Status"
              onChange={(e) => setNewStatus(e.target.value)}
            >
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Confirmed">Confirmed</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmStatusChange}
            variant="contained"
            color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
