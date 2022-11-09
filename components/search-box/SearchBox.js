import { useState } from "react";
import Button from "@components/button/Button";
import styles from "./search-box.module.css";

export default function SearchBox({ setCategory }) {
  const [userInput, setUserInput] = useState("");

  function handleCategory(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e, input) {
    e.preventDefault();
    setCategory(input);
    setUserInput("");
  }
  return (
    <form onSubmit={e => handleSubmit(e, userInput)} className={styles.form}>
      <label htmlFor="category">
        <input
          className={styles.input}
          id="category"
          type="text"
          value={userInput}
          onChange={handleCategory}
          placeholder="Enter category name"
          required
        />
      </label>
      <Button>Submit</Button>
    </form>
  );
}
