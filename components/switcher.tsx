'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <div className="language-selector__container">
    <label>
     <select   defaultValue={localActive} onChange={onSelectChange} disabled={isPending} className="js_language_selector ">
       <option value='ge'>Ka</option>
       <option value='en'>En</option>
       <option value='ru'>Ru</option>
     </select>
   </label>
 </div>

  );
}