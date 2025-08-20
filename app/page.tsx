import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <Link href="/books" className="text-blue-500 hover:underline mt-4">ดูรายละเอียดหนังสือ</Link>
      </div>
  );
}
