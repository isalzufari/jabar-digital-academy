import { deleteProduct, updateProduct } from '../../../../lib/db';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request, { params }: any) {
  await deleteProduct(Number(params.id));
  return NextResponse.json({ status: 'deleted' });
}

export async function PUT(req: Request, { params }: any) {
  const body = await req.json();
  await updateProduct(Number(params.id), body.name, body.price);
  return NextResponse.json({ status: 'updated' });
}
