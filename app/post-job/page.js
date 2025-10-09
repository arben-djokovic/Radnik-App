import React from "react";
import PostJob from "./PostJob";

export const metadata = {
  title: 'Radnik App - Objavi posao',
  description: 'Objavi posao na RadnikApp. Povezujemo vas sa proverenim radnicima u vašoj blizini.',
}

export default function page() {
  return (<PostJob />);
}
