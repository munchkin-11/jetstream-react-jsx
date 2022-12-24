import { Page } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { InertiaSharedProps } from '@/types';

export default function useTypedPage() {
  return usePage(InertiaSharedProps);
}
