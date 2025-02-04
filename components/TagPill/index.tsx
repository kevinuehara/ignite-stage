interface PillTagProps {
  text: string;
}

export const PillTag = ({ text }: PillTagProps) => {
  return (
    <div className="p-0 px-2 rounded-xl text-sm bg-emerald-100 text-emerald-800 mr-2 mt-2">
      {text}
    </div>
  );
};
