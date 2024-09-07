"use client";

import { useEffect, useState, useTransition } from "react";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LocaleSwitch = () => {
  const locale = useLocale();
  const [value, setValue] = useState(locale);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    startTransition(() => {
      router.replace(`/${value}`);
    });
  }, [router, value]);

  return (
    <Select
      defaultValue={locale}
      value={value}
      onValueChange={setValue}
      disabled={isPending}>
      <SelectTrigger className="flex gap-4 items-center justify-center border-[0.5px] p-2 bg-background text-foreground uppercase rounded-md">
        <SelectValue placeholder={locale} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="hover:text-white" value="en">
          EN
        </SelectItem>
        <SelectItem value="fr">FR</SelectItem>
        <SelectItem value="de">DE</SelectItem>
        <SelectItem value="es">ES</SelectItem>
        <SelectItem value="jp">JP</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitch;
