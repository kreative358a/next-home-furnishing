/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import CarouselBackground from "@/components/about/CarouselBackground";

const text = "HOME-FURNISHINGS";

function About() {
  return (
    <>
      <CarouselBackground />
      <div className="productsContent px-0.5 sm:px-2 lg:px-4 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2 ">
        <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
          <div className="stats text-accent-foreground bg-primary/80 shadow p-2 text-center rounded-md">
            <p
              style={{ overflowY: "hidden" }}
              className=" text-3xl sm:text-4xl lg:text-6xl font-bold tracking-widest p-2"
            >
              WE LOVE
            </p>
          </div>
          <div className="stats text-accent-foreground bg-primary/80 shadow p-2 text-center rounded-md">
            <p
              style={{ overflowY: "hidden" }}
              translate="no"
              className=" text-3xl sm:text-4xl lg:text-6xl font-bold tracking-widest p-2"
            >
              {text}
            </p>
          </div>
        </div>
        <div className=" text-justify text-base sm:text-lg">
          <p
            className="mt-4 leading-6 max-w-2xl mx-auto rounded-md px-4 py-2 bg-muted/60 hover:bg-muted/80"
            //  style={{ background: "rgba(120, 120, 140, 0.6)", padding: "10px" }}
          >
            <strong>Affordability: </strong>
            <span translate="no"> {text} </span> offers a wide range of stylish
            furniture at competitive prices, making it accessible to many
            consumers.
          </p>
          <p className="mt-4 leading-6 max-w-2xl mx-auto rounded-md px-4 py-2 bg-muted/60 hover:bg-muted/80">
            <strong>Modern Design: </strong>
            Our products often feature a sleek, modern aesthetic that appeals to
            a variety of tastes and home styles.
          </p>
          <p className="mt-4 leading-6 max-w-2xl mx-auto rounded-md px-4 py-2 bg-muted/60 hover:bg-muted/80">
            <strong>Functionality: </strong>
            Many <span translate="no"> {text} </span> pieces are designed with
            practicality in mind, including space-saving solutions and
            multifunctional furniture, which is especially appealing for smaller
            living spaces.
          </p>
          <p className="mt-4 leading-6 max-w-2xl mx-auto rounded-md px-4 py-2 bg-muted/60 hover:bg-muted/80">
            <strong>Customization: </strong>
            <span translate="no"> {text} </span> provides options for
            customization, allowing customers to mix and match different pieces
            and styles to suit their needs.
          </p>
          <p className="mt-4 leading-6 max-w-2xl mx-auto rounded-md px-4 py-2 bg-muted/60 hover:bg-muted/80">
            <strong>Easy Assembly: </strong>
            Most <span translate="no"> {text} </span> furniture comes with clear
            instructions for self-assembly, which many people find convenient,
            even if some might find it challenging.
          </p>
          <p className="mt-4 leading-6 max-w-2xl mx-auto rounded-md px-4 py-2 bg-muted/60 hover:bg-muted/80">
            <strong>Sustainability: </strong>
            <span translate="no"> {text} </span> has made commitments to
            sustainability, using renewable and recycled materials in many of
            its products, which resonates with environmentally conscious
            consumers.
          </p>
          <p className="mt-4 leading-6 max-w-2xl mx-auto rounded-md px-4 py-2 bg-muted/60 hover:bg-muted/80">
            <strong>Shopping Experience: </strong>
            The unique store layout, which guides customers through showrooms
            and encourages exploration, enhances the shopping experience.
          </p>
          <p className="mt-4 leading-6 max-w-2xl mx-auto rounded-md px-4 py-2 bg-muted/60 hover:bg-muted/80">
            <strong>Brand Recognition: </strong>
            <span translate="no"> {text} </span> is a well-known brand with a
            strong reputation, which instills confidence in consumers regarding
            quality and customer service.
          </p>
          <p className="mt-4 leading-6 max-w-2xl mx-auto rounded-md px-4 py-2 bg-muted/60 hover:bg-muted/80">
            <strong>
              These factors combined make <span translate="no"> {text} </span> a
              popular choice for many individuals looking to furnish their
              homes.
            </strong>
          </p>
          <p className="hidden mt-4 leading-6 max-w-2xl mx-auto rounded-md px-4 py-2 bg-muted/60 hover:bg-muted/80">
            <p className="text-base text-foreground">
              These factors combined make: text-foreground
            </p>
            <p className="text-base text-card-foreground">
              These factors combined make: text-card-foreground
            </p>
            <p className="text-base text-muted-foreground">
              These factors combined make: text-muted-foreground
            </p>
            <p className="text-base text-muted">
              These factors combined make: text-muted
            </p>
            <p className="text-base text-accent">
              These factors combined make: text-accent
            </p>
            <p className="text-base text-accent-foreground">
              These factors combined make: text-accent-foreground
            </p>
            <p className="text-base text-primary">
              These factors combined make: text-primary
            </p>
            <p className="text-base text-accent-foreground">
              These factors combined make: text-accent-foreground
            </p>
            <p className="text-base text-primary-foreground">
              These factors combined make: text-primary-foreground
            </p>
            <p className="text-base text-primary-content">
              These factors combined make: text-primary-content
            </p>
            <p className="text-base text-info">
              These factors combined make: text-info
            </p>
            <p className="text-base text-info-content">
              These factors combined make: text-info-content
            </p>
            <p className="text-base text-destructive">
              These factors combined make: text-destructive
            </p>
            <p className="text-base text-destructive-foreground">
              These factors combined make: text-destructive-foreground
            </p>
            <p className="text-base text-secondary-foreground">
              These factors combined make: text-secondary-foreground
            </p>
            <p className="text-base text-primary">
              These factors combined make: text-primary
            </p>
            <p className="text-base text-ring">
              These factors combined make: text-ring
            </p>
            <p className="text-base text-warning-content">
              These factors combined make: text-warning-content
            </p>
            <p className="text-base text-warning">
              These factors combined make:text-warning
            </p>
            <p className="text-base text-orange-500 dark:text-green-500">
              These factors combined make:text-warning
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
