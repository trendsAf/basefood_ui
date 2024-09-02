interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 bg-brand-blue text-white rounded ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
