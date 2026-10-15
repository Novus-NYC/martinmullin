import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Page not found | Martin Mullin",
  description: "That page is not on martinmullin.com. See the work, biography, CV or contact pages.",
};

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found">
        <p className="mt-4 max-w-prose text-lg text-muted">That page is not on the wall. The work is a step away.</p>
      </PageHeader>
      <ul className="flex flex-wrap gap-x-8 gap-y-2 border-t border-hairline pt-8">
        <li>
          <Link href="/work" className="underline decoration-hairline underline-offset-4 hover:decoration-accent">
            See all work
          </Link>
        </li>
        <li>
          <Link href="/" className="underline decoration-hairline underline-offset-4 hover:decoration-accent">
            Go to the home page
          </Link>
        </li>
      </ul>
    </>
  );
}
