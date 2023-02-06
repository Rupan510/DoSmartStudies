import { NavHeader } from "@/components/NavHeader";
import NotesCard from "@/components/NotesCard";
import { useUser } from "@/context/AuthContext";
import { Notes } from "@/models";
import { DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";

const notesDes = {
  image:
    "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
  category: "decorations",
  title: "Top 50 underrated plants for house decoration",
  footer: "733 people liked this",
  author: {
    name: "Elsa Gardenowl",
    description: "posted 34 minutes ago",
    image:
      "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
};
const home = () => {
  const [note, setNote] = useState<Object>([]);
  const { user } = useUser();

  async function getNotes() {
    try {
      const notes = await DataStore.query(Notes);
      setNote(notes);
      console.log("notes inside try catch", notes);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("notes", note);
  console.log("user", user);
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <NavHeader />

      <NotesCard
        image={notesDes.image}
        category={notesDes.category}
        title={notesDes.image}
        footer={notesDes.footer}
        author={notesDes.author}
      />
    </div>
  );
};

export default home;
