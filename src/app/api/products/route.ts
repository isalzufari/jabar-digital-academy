import { NextResponse } from 'next/server';
import { getProducts, addProduct } from '../../../lib/db';

export async function GET() {
  const data = await getProducts();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  await addProduct(body.name, body.price);
  return NextResponse.json({ status: 'ok' });
}
