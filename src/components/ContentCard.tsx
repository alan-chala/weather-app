import { Card, CardContent, CardFooter } from "@/components/ui/card";

type ContentCardProps = {
  name: string;
  imageUrl: string;
  content: string;
};

export const ContentCard = ({ name, imageUrl, content }: ContentCardProps) => {
  return (
    <Card className="flex-1">
      <CardContent>
        <p>{name}</p>
        <img
          className="object-cover"
          width={105}
          height={105}
          src={imageUrl}
          alt={`${name} icon`}
        />
      </CardContent>
      <CardFooter>
        <p>{content}</p>
      </CardFooter>
    </Card>
  );
};
