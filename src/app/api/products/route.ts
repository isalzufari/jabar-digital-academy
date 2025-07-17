import { add, getAll } from '@/utils/products-data';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(getAll());
}

export async function POST(req: Request) {
  const body = await req.json();
  const newProduct = add(body);
  return NextResponse.json(newProduct);
}
