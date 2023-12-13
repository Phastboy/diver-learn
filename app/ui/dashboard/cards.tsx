import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
    name: string;
    image: string;
    info: string;
    instructor: string;
    path: string;
    }
export default function CourseCard(props: CourseCardProps) {
    return (
        <div className="flex flex-col items-center justify-center py-2">
            <div className="flex flex-col items-center justify-center py-2">
                <Image
                    src={props.image}
                    alt={props.name}
                    width={500}
                    height={500}
                />
                <p>{props.name}</p>
                <p>{props.info}</p>
                <p>{props.instructor}</p>
                <Link href={props.path}>
                    <p>View course</p>
                </Link>
            </div>
        </div>
    );
}   