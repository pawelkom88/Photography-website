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
    <div className={styles.container}>
      <div>
        <label htmlFor="number of pages">Select number of images</label>
        <select id="number of pages">
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
      </div>

      <form onSubmit={e => handleSubmit(e, userInput)} className={styles.form}>
        <label htmlFor="category">Category name</label>
        <input
          className={styles.input}
          id="category"
          type="text"
          value={userInput}
          onChange={handleCategory}
          placeholder="e.g: wedding"
          required
        />
      </form>

      <Button>Submit</Button>
    </div>
  );
}
