import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "express",
    "postgresql",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "go",
    "python",
    "c",
    "racket",
    "prolog",
    "haskell",
];

export function IconCloudDemo() {
    return (
        <div className="relative flex flex-col h-full w-full items-center justify-center border-black border-2 overflow-hidden rounded-lg bg-background bg-white px-20 pb-20 pt-8">
            <IconCloud iconSlugs={slugs} />
            {/*    <div className="w-full flex">Java: <div className="w-[80%] h-5 bg-gray-300"><div className="w-[35%] h-5 bg-amber-200">35%</div></div></div>*/}
            {/*<div className="w-full flex">JavaScript: <div className="w-[80%] h-5 bg-gray-300"><div className="w-[35%] h-5 bg-amber-200">35%</div></div></div>*/}

        </div>
    );
}
