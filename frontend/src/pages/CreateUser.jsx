import { useState } from "react";
import api from "../api/axios";

function CreateUser() {
  const [name, setName] = useState("");
  const [parentId, setParentId] =
    useState("");

  const submit = async () => {
    await api.post("/users", {
      name,
      parentId,
    });

    alert("User Created");
  };

  return (
    <>
      <h2>Create User</h2>

      <input
        placeholder="Name"
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        placeholder="Parent ID"
        onChange={(e) =>
          setParentId(e.target.value)
        }
      />

      <button onClick={submit}>
        Create
      </button>
    </>
  );
}

export default CreateUser;