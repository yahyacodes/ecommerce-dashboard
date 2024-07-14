"use client";

import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserType {
  id: number;
  name: string;
  email: string;
}

export default function RecentSales() {
  const [isUser, setIsUser] = useState<UserType[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users?offset=10&limit=6")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then((data) => {
        setIsUser(data);
      });
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {isUser.map((user) => (
          <div className="flex items-center gap-4" key={user.id}>
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarFallback className="capitalize">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
