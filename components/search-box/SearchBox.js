import { useState } from "react";
import Button from "@components/button/Button";
import styles from "./search-box.module.css";

export default function SearchBox({ setCategory }) {
  const [userInput, setUserInput] = useState("");

  function handleCategory() {
    setUserInput(e.target.value);
  }

  function handleSubmit() {
    e.preventDefault();
    setCategory();
    setUserInput("");
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="category">Category</label>
      <input id="category" type="text" value={userInput} onChange={handleCategory} />
      <Button>Submit</Button>
    </form>
  );
}
