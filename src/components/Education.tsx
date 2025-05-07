import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const Education = () => {
  const education = {
    university_name:
      "University of Engineering and Technology, Vietnam National University Hanoi",
    university_logo: "/universities/uet.jpeg",
  };
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <Image
              src={education.university_logo}
              alt={education.university_name}
              width={40}
              height={40}
              className="rounded-md shadow-md object-cover"
            />
            <p className="text-muted-foreground">
              Studied at the University of Engineering and Technology, Vietnam
              National University Hanoi
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
