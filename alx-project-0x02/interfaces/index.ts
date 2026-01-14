export interface CardProps {
  id?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: CardProps) => void;
}

export interface ButtonProps {
  size: ["small" | "medium" | "large"];
  shape: ["rounded-sm" | "rounded-md" | "rounded-full"];
  name: string;
}
