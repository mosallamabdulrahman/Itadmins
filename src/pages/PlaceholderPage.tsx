import { useLocation } from "react-router-dom";

export function PlaceholderPage() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const title = pathParts[pathParts.length - 1]?.replace(/-/g, ' ') || 'Page';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white capitalize mb-6">{title}</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
        This page is currently under construction. We are working hard to bring you the best experience.
      </p>
    </div>
  );
}
