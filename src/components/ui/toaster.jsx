import { useToast } from "./use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2">
      {toasts.map(({ id, title, description }) => (
        <div
          key={id}
          className="glass-panel max-w-sm p-4 shadow-lg"
        >
          {title && <h4 className="font-bold text-white">{title}</h4>}
          {description && (
            <p className="text-white/80 text-sm mt-1">{description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
