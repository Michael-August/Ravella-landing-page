interface StepNumberProps {
  number: string;
}

export const StepNumber = ({ number }: StepNumberProps) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#32241B] text-white text-sm font-semibold border-2 border-ravella-brown">
      {number}
    </div>
  );
};
