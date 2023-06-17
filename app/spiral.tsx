import styles from "./spiral.module.css";

/*
 * This component is adapted from a CodePen - https://codepen.io/shshaw/pen/bGeBvwy
 * with Splitting.js replaced by manually assigning similar CSS variables to elements
 */
export default function Spiral() {
  const chars = [
    "for",
    "<div>",
    "{",
    "import",
    ";",
    "class",
    "}",
    "if",
    '"',
    "switch",
    "=>",
    "else",
  ];
  const charTotal = chars.length * 24;
  return (
    <div className={styles.spiral} style={{ "--char-total": charTotal } as React.CSSProperties}>
      {[...Array(charTotal).keys()].map((n) => (
        <span
          className={styles.char}
          style={{ "--char-percent": n / charTotal } as React.CSSProperties}
          key={n}
        >
          {chars[n % chars.length]}
        </span>
      ))}
    </div>
  );
}
