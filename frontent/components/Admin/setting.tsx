import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
} from "@mui/material";

export default function TravelSettingsPage() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Notification Settings */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle>🔔 Travel Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Flight Updates</p>
              <p className="text-sm text-gray-500">
                Get notified of flight delays, gate changes, or cancellations
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Hotel Bookings</p>
              <p className="text-sm text-gray-500">
                Alerts for hotel check-in, checkout, and booking changes
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Tour Reminders</p>
              <p className="text-sm text-gray-500">
                Notifications before your guided tours or excursions
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Special Offers</p>
              <p className="text-sm text-gray-500">
                Receive updates on discounts, deals & seasonal offers
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Security & Privacy */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle>🛡 Security & Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Travel Document Alerts</p>
              <p className="text-sm text-gray-500">
                Get reminders for passport, visa, and ID expiration
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Login Notifications</p>
              <p className="text-sm text-gray-500">
                Get notified of new login attempts to your travel account
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Location Sharing</p>
              <p className="text-sm text-gray-500">
                Allow sharing location with emergency contacts while traveling
              </p>
            </div>
            <Switch />
          </div>

          <div>
            <p className="font-medium mb-2">Session Timeout</p>
            <FormControl fullWidth>
              <Select defaultValue="15 minutes">
                <MenuItem value="15 minutes">15 minutes</MenuItem>
                <MenuItem value="30 minutes">30 minutes</MenuItem>
                <MenuItem value="1 hour">1 hour</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Button className="mt-4 w-full">Download Travel Report</Button>
        </CardContent>
      </Card>

      {/* Travel Preferences */}
      <Card className="lg:col-span-2 rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle>🌍 Travel Preferences</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormControl fullWidth>
            <InputLabel>Preferred Theme</InputLabel>
            <Select defaultValue="Light">
              <MenuItem value="Light">Light</MenuItem>
              <MenuItem value="Dark">Dark</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Preferred Language</InputLabel>
            <Select defaultValue="English">
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="German">German</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Time Zone</InputLabel>
            <Select defaultValue="UTC-8 (PST)">
              <MenuItem value="UTC-8 (PST)">UTC-8 (PST)</MenuItem>
              <MenuItem value="UTC+0 (GMT)">UTC+0 (GMT)</MenuItem>
              <MenuItem value="UTC+5:30 (IST)">UTC+5:30 (IST)</MenuItem>
              <MenuItem value="UTC+9 (JST)">UTC+9 (JST)</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}
