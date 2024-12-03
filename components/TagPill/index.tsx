interface PillTagProps {
  text: string;
}

export const PillTag = ({ text }: PillTagProps) => {
  return (
    <div className="p-2 rounded-lg bg-slate-300 text-violet-700 mr-2 mt-2">
      {text}
    </div>
  );
};
