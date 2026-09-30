import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_DATA, PRODUCTS_LIST } from "@/data/business";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Fevicol & Wood Adhesives in Hosur | Synthetic Resin & Glass Bonding",
  description:
    "Sri Krishna Plywoods & Hardwares in Hosur offers genuine Fevicol SH, Marine, Speedx, ProBond, and Nail Free Ultra adhesive for glass applications.",
  alternates: {
    canonical: "/products/adhesives",
  },
  openGraph: {
    title:
      "Fevicol & Wood Adhesives in Hosur | Sri Krishna Plywoods & Hardwares",
    description:
      "Sri Krishna Plywoods & Hardwares in Hosur offers genuine Fevicol SH, Marine, Speedx, ProBond, and Nail Free Ultra adhesive for glass applications.",
    url: `${BUSINESS_DATA.meta.siteUrl}/products/adhesives`,
  },
};

export default function AdhesivesPage() {
  const adhesiveItems = PRODUCTS_LIST.filter((p) => p.category === "adhesives");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Products", item: "/products" },
          { name: "Adhesives", item: "/products/adhesives" },
        ]}
      />
      <section
        style={{
          backgroundColor: "var(--stone-ivory-light)",
          padding: "4rem 0 3rem",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              fontSize: "0.85rem",
              color: "var(--graphite-muted)",
              marginBottom: "1rem",
            }}
          >
            <Link href="/">Home</Link> / <Link href="/products">Products</Link>{" "}
            /{" "}
            <span style={{ color: "var(--deep-walnut)", fontWeight: 600 }}>
              Adhesives
            </span>
          </div>
          <h1 style={{ marginBottom: "1rem" }}>
            Fevicol &amp; Wood Adhesives Supplier in Hosur
          </h1>
          <p style={{ maxWidth: "720px", fontSize: "1.1rem" }}>
            Unmatched bond strength for wood joinery, laminate pressing, and
            glass applications. Stocking genuine Fevicol SH, Marine, Speedx,
            ProBond, and Nail Free Ultra.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
              alignItems: "stretch",
              marginBottom: "4rem",
            }}
          >
            {adhesiveItems.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-light)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  {/* Card Thumbnail Image */}
                  <div
                    style={{
                      position: "relative",
                      height: "348px",
                      width: "100%",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ padding: "2rem 2rem 1rem" }}>
                    <span
                      className="badge"
                      style={{
                        marginBottom: "0.75rem",
                        display: "inline-block",
                      }}
                    >
                      Industrial Strength
                    </span>
                    <h2
                      style={{
                        fontSize: "1.45rem",
                        marginBottom: "0.75rem",
                        color: "var(--deep-walnut)",
                        lineHeight: 1.25,
                      }}
                    >
                      {item.name}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--graphite-muted)",
                        marginBottom: "1.25rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.description}
                    </p>

                    <h3
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--deep-walnut)",
                        marginBottom: "0.65rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Performance Highlights:
                    </h3>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.45rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {item.features.map((f, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--graphite)",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.45rem",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--olive-green)",
                              fontWeight: "bold",
                              lineHeight: 1,
                            }}
                          >
                            ✓
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Pin */}
                <div style={{ padding: "0 2rem 2rem" }}>
                  <a
                    href={BUSINESS_DATA.telLink}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              aspectRatio: "16/8",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <Image
              src="/images/fevicol-range.jpg"
              alt={`Wood adhesives and carpentry tools at ${BUSINESS_DATA.name} Hosur`}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
