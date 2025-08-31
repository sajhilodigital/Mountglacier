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
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { MoreVertical } from "lucide-react";

type User = {
  id: number;
  username: string;
  email: string;
  mobile: string;
  address: string;
  lastLogin: string;
};

const initialUsers: User[] = [
  {
    id: 1,
    username: "rohit",
    email: "rohit@example.com",
    mobile: "9800000001",
    address: "Kathmandu, Nepal",
    lastLogin: "2025-08-25 14:23",
  },
  {
    id: 2,
    username: "sita",
    email: "sita@example.com",
    mobile: "9800000002",
    address: "Pokhara, Nepal",
    lastLogin: "2025-08-24 09:12",
  },
  {
    id: 3,
    username: "ram",
    email: "ram@example.com",
    mobile: "9800000003",
    address: "Butwal, Nepal",
    lastLogin: "2025-08-23 19:40",
  },
];

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [search, setSearch] = useState("");

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    user: User
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleConfirmDelete = () => {
    if (selectedUser) {
      setUsers(users.filter((u) => u.id !== selectedUser.id));
    }
    setOpenDialog(false);
  };

  const filteredUsers = users.filter(
    (u) =>
      u.username.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <h2 className="text-2xl font-semibold">User Management</h2>
        <TextField
          size="small"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <TableContainer component={Paper} className="rounded-2xl shadow-md">
          <Table>
            <TableHead className="bg-gray-100">
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Last Login</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.mobile}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={(e) => handleMenuOpen(e, user)}>
                        <MoreVertical className="w-5 h-5" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    align="center"
                    className="text-gray-500"
                  >
                    No users found
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
        <MenuItem onClick={() => alert(`Edit ${selectedUser?.username}`)}>
          Edit
        </MenuItem>
        <MenuItem onClick={() => alert(`Viewing ${selectedUser?.username}`)}>
          View
        </MenuItem>
        <MenuItem onClick={handleDeleteClick} className="text-red-600">
          Delete
        </MenuItem>
      </Menu>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete{" "}
            <span className="font-semibold">{selectedUser?.username}</span>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
