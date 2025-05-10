import Image from "next/image";

interface TestimonialCardProps {
  content: string;
  author: string;
  role?: string;
  rating: number;
  initials?: string;
  className?: string;
}

const TestimonialCard = ({
  content,
  author,
  role,
  rating,
  initials,
  className = "",
}: TestimonialCardProps) => {
  return (
    <div className={`rounded-xl bg-white p-8 shadow-md ${className}`}>
      <div className="mb-4 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 text-yellow-400`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="mb-8 text-gray-700 italic leading-relaxed">{content}</p>
      <div className="flex items-center">
        {initials && (
          <div className="mr-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-800 font-semibold">
              {initials}
            </div>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          {role && <p className="text-sm text-gray-600">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 