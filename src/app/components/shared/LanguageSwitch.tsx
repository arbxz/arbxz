import Link from "next/link";

export default function LanguageChanger() {
  return (
    <>
      <Link href="/" locale="en">
        <h2>EN</h2>
      </Link>
      <Link href="/" locale="fr">
        <h2>FR</h2>
      </Link>
    </>
  );
}
