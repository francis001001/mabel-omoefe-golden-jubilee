import { sanityReadClient, sanityWriteClient } from "@/lib/sanity";

export async function GET() {
  const wishes = await sanityReadClient.fetch(
    `*[_type == "wish"] | order(_createdAt desc) { _id, name, message, _createdAt }`
  );
  return Response.json(wishes);
}

export async function POST(request: Request) {
  const { name, message } = await request.json();

  if (!name?.trim() || !message?.trim()) {
    return Response.json(
      { error: "Name and message are required" },
      { status: 400 }
    );
  }

  const wish = await sanityWriteClient.create({
    _type: "wish",
    name: name.trim(),
    message: message.trim(),
  });

  return Response.json(wish, { status: 201 });
}
