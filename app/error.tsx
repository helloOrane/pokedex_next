"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// cette fonction détectera TOUTES les erreurs
export default function Error({
  error,
}: {
  error: Error & { digest?: string }; //digest est une propriété de l'objet Error
  reset: () => void; // fonction qui réinitialise la limite d'erreur. Une fois executée, elle permet de recharger la page
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Image src="/image/not_found.png" alt="error" width={300} height={300} />
      <h2 className="text-center">Something went wrong!</h2>
      <Link
        href="/"
        className="mt-4 rounded-md bg-gray-500 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-400"
      >
        Go to home page
      </Link>
    </main>
  );
}
