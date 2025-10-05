// src/hooks/useSearch.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useSearch() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => setInput(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate(`/profile/${input.trim()}`);
    }
  };

  return {
    input,
    onChange,
    onSubmit,
  };
}
