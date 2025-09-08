"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";

export default function FindLawyer(){
    const [Languages,setLanguage] = useState("");
    const [state,setState] = useState("");
    const [type,setType] = useState("");
    return (
      <Card>
        <CardHeader>Find a lawyer</CardHeader>
        <CardContent className="flex items-center gap-5">
          <Select value={Languages} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kanada">Kanada</SelectItem>
              <SelectItem value="Hindi">Hindi</SelectItem>
              <SelectItem value="Marathi">Marathi</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Telgue">Telgue</SelectItem>
              <SelectItem value="Tamil">Tamil</SelectItem>
            </SelectContent>
          </Select>
          <Select value={state} onValueChange={setState}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Karnataka">Karnataka</SelectItem>
              <SelectItem value="Maharashtra">Maharashtra</SelectItem>
              <SelectItem value="Punjab">Punjab</SelectItem>
              <SelectItem value="Uttar-Pradesh">Uttar Pradesh</SelectItem>
            </SelectContent>
          </Select>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Civil">Civil</SelectItem>
              <SelectItem value="Criminal">Criminal</SelectItem>
              <SelectItem value="Probation">Probation</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter>
          <Link
            href={`/lawyers?language=${Languages}&State=${state}&Type=${type}`}
            className={buttonVariants()}
          >
            Find Lawyer
          </Link>
        </CardFooter>
      </Card>
    );
}