import Link from "next/link";
export default function Footer() {
  return (
    <footer className="text-center text-off-white py-3 bg-very-dark-blue text-[10px]">
      Challenge by{" "}
      <Link
        className="underline"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </Link>{" "}
      | Coded by{" "}
      <Link className="underline" href="#">
        Roselin Y
      </Link>
      .
    </footer>
  );
}
