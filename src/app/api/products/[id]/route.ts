import { getById, remove, update } from '@/utils/products-data';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const product = getById(Number(params.id));
  return product
    ? NextResponse.json(product)
    : NextResponse.json({ message: 'Not found' }, { status: 404 });
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const updated = update(Number(params.id), data);
  return updated
    ? NextResponse.json(updated)
    : NextResponse.json({ message: 'Not found' }, { status: 404 });
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  const deleted = remove(Number(params.id));
  return deleted
    ? NextResponse.json(deleted)
    : NextResponse.json({ message: 'Not found' }, { status: 404 });
}
