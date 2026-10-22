import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import { Col, H3, Lead, P } from "@/components/ui";

export const metadata: Metadata = { title: "Trademarks" };
const N = brand.name;
const rail = [
  { id: "general-guidelines", label: "General Guidelines" }, { id: "wordmarks", label: "Wordmarks" }, { id: "logos-designs", label: "Logos & Designs" }, { id: "notices", label: "Trademark, Copyright Notices & Legends" }, { id: "vendor-advertising", label: "Vendor Advertising" }, { id: "search-placement", label: "Search Placement & Content Targeting" }, { id: "permission", label: "Requesting Permission To Use" },
];

type Item = { dont?: boolean; text: string; sub?: string[] };
const sections: { id: string; title: string; intro?: string; items: Item[] }[] = [
  { id: "general-guidelines", title: "General Guidelines", intro: `These guidelines clarify proper usage of ${N}'s trademarks. ${N} reserves the right to take any action (including changing these guidelines) to protect its intellectual property if doing so becomes necessary. Some of ${N}'s trademarks, including ${N}'s logos, may only be used with ${N}'s prior written permission.`, items: [
    { dont: true, text: `Display ${N}'s trademarks in any context that falsely suggests a relationship between:`, sub: [`${N} and another entity;`, `Another entity and ${N}'s goods, services, or commercial activities; or`, `${N} and the goods, services, commercial activities, views, or opinions of another entity.`] },
    { dont: true, text: `Use ${N}'s trademarks in a way that implies an affiliation, connection, association, sponsorship, approval, certification, or endorsement, where there is no such relationship.` },
    { dont: true, text: `Use ${N}'s trademarks except in a manner that is less prominent than your own trade name or trademarks.` },
    { dont: true, text: `Use any ${N} trademarks in modified forms, including uses that:`, sub: ["Translate or transliterate words in the trademarks;", "Substitute images for words or other descriptions;", "Combine the trademarks with your name or your marks;", "Add any words, symbols, numbers, spaces, punctuation, devices, designs, images, or other matter to any trademarks;", "Abbreviate or delete any words, symbols, numbers, spaces, punctuation, devices, designs, images, or other matter from any trademarks;", "Make singular words plural or plural words singular;", "Insert the trademarks into a tagline or slogan; or", "Misspell words within the trademarks."] },
    { dont: true, text: `Use ${N}'s trademarks within or as a component of:`, sub: ["A domain name, subdomain, top-level domain name, or URL;", "An email address;", "A telephone number;", "An app name or software title;", "A trade name, business name, fictitious or assumed name, or company name;", "An account name, handle, or profile name on any service;", "The name of any product, service, or other commercial activity;", "The name of any fan group, user group, technology community, or any other organisation; or", "The title of any book, film, magazine, website, interactive media, or other expressive content."] },
    { dont: true, text: `Display ${N}'s trademarks except in a positive manner and don't use the trademarks to depict or refer to ${N} or any third party, their products, their services, or their commercial activities in a negative way.` },
    { dont: true, text: `Associate ${N}'s trademarks with — or use them in proximity to — any content or activities that are vulgar, obscene, profane, indecent, sexually explicit, immoral, scandalous, defamatory, disparaging or otherwise objectionable.` },
    { dont: true, text: `Use any trademarks or other designations that are confusingly similar to any trademarks that ${N} owns.` },
  ] },
  { id: "wordmarks", title: "Wordmarks", intro: `Some ${N} trademarks consist of only words and don't feature any particular stylisation, such as a specific font, typeface, or color (collectively "Word Marks" and each a "Word Mark").`, items: [
    { text: `${N}'s Word Marks may be used with ${N}'s prior written consent and in compliance with these Guidelines to the extent that such use is not likely confusing and is needed to truthfully convey information, such as:`, sub: [`Indicating the location of an independent business or event within or nearby a ${N} location;`, `Indicating that a product, service, or solution is interoperable or compatible with a product, service, or solution offered by ${N};`, `Accurately and directly referring to ${N}, its businesses, and their products, services, or commercial activities; or`, `In the titles of news publications and other factual content about ${N}, its businesses, and their products, services, or commercial activities.`] },
    { dont: true, text: `Use ${N}'s Word Marks in the context of other text, such as within advertising copy, unless they are shown in a manner that differentiates them from that text by showing the Word Marks in:`, sub: ["Title Case (i.e. capitalising the first letter in each word);", "ALL CAPITAL CASE;", "Bold Font;", "Underlined Font;", "Italic Font; or", "Some other visually distinct style."] },
    { text: `Only use ${N} Word Marks in text as adjectives accompanied by an appropriate generic noun that refers to the relevant product or service, except when it is appropriate to use a Word Mark as a noun to refer to the company itself.` },
    { dont: true, text: `Use any ${N} trademark as a verb, adverb, or in a manner that suggests they have a common, descriptive, or generic meaning.` },
  ] },
  { id: "logos-designs", title: "Logos & Designs", intro: `Some ${N} trademarks feature stylisation (including a particular font, typeface, or color) or include a device, design, or other image (all collectively "Logos" and each a "Logo"). ${N} Logos may only be used with ${N}'s prior written consent.`, items: [
    { dont: true, text: `Use ${N}'s Logos without ${N}'s prior written consent.` },
    { dont: true, text: "Use the Logos on a background color into which they blend, in whole or in part." },
    { dont: true, text: "Use the Logos within enclosing text or in the middle of a phrase or sentence." },
    { dont: true, text: `Modify, distort, rotate, animate, or alter ${N}'s Logos in any manner and only use the Logos in the form, orientation, and colors supplied by ${N}. You may change the overall size of the Logos, provided that all proportions are maintained.` },
    { dont: true, text: `Incorporate ${N}'s Logos into any texture, repeating pattern, or motif.` },
    { dont: true, text: `Use ${N}'s Logos, including without limitation its ${brand.markShort} Design, as a letter or as punctuation in any word or phrase.` },
    { dont: true, text: `Display ${N}'s Logos in a manner that overlaps the Logo with any shapes, images, photographs, or other trademarks.` },
  ] },
  { id: "notices", title: "Trademark & Copyright Notices and Legends", intro: `Always use a notice of trademark (the "TM" symbol), notice of service mark (the "SM" symbol), or the notice of registration (the encircled "R" symbol), as each may be appropriate, with the first or most prominent use of each ${N} trademark.`, items: [
    { dont: true, text: `Use a notice of registration (the encircled "R" symbol) with a trademark that is not registered with the relevant trademark office or one that is not registered in connection with the goods or services at issue.` },
    { dont: true, text: `Use a notice of service mark (the "SM" symbol) with a trademark where the use in question does not relate to services.` },
    { dont: true, text: `Use any trademark notices with ${N} trademarks intended for an audience outside of the country of registration, distributed through a website or publication originating outside that country, or displayed in a manner that is not consistent with local law.` },
    { text: `Always include a footnote stating that any ${N} trademarks you use, listed in alphabetical order, are "trademarks of ${brand.legalName} and its affiliates" or include that information in another notice.` },
    { text: `Always include a footnote stating that any ${N} Logos are "© 2xxx ${brand.legalName}" (where the "2xxx" year is as may be indicated by ${N}) or include that information in another notice.` },
  ] },
  { id: "vendor-advertising", title: "Vendor Advertising", intro: `${N} considers requests to use certain Logos as "vendor tags," which relate to the availability of products or services from ${N}, in third party advertisements through its Vendor Tagged Advertising programme.`, items: [
    { dont: true, text: `Use any ${N} Logos in advertisements without prior written approval.` },
  ] },
  { id: "search-placement", title: "Search Placement & Content Targeting", intro: `Third parties may not purchase or bid on ${N} trademarks as keywords, ad groups, or targeting criteria in search engines, social media, or other advertising platforms without ${N}'s prior written consent.`, items: [
    { dont: true, text: `Use ${N} trademarks in the visible text, display URL, or landing page of any advertisement without prior written approval.` },
  ] },
  { id: "permission", title: "Requesting Permission To Use", intro: `To request permission to use ${N}'s trademarks, please contact ${brand.contactTeam} at ${brand.contactEmail} with a description of the intended use, the medium, the duration, and sample artwork.`, items: [] },
];

export default function Page() {
  return (
    <PageShell hero={<PageHero title="Trademarks" />} title="Trademarks" rail={rail}>
      <Col className="pt-[130px] pb-[120px]">
        <Lead className="space-y-4"><p>{N}&apos;s trademarks are invaluable assets that represent customer trust and goodwill in the brand.</p><p>{N} has the exclusive right to use — and authorise the use of — these names, logos, and other signifiers that distinguish its goods, services, and business activities.</p></Lead>
      </Col>
      {sections.map((s) => (
        <Col key={s.id} id={s.id} className="pb-20">
          <H3>{s.title}</H3>
          {s.intro && <P size="small" className="mt-6 max-w-[720px]">{s.intro}</P>}
          <div className="mt-8 max-w-[720px] space-y-8">
            {s.items.map((it, i) => (
              <div key={i}>
                {it.dont && <p className="t-xs font-bold">Don&apos;t</p>}
                <P size="xs" className="mt-2">{it.text}</P>
                {it.sub && <ol className="t-xs mt-3 space-y-2">{it.sub.map((x, k) => <li key={x}>({String.fromCharCode(97 + k)})&nbsp;&nbsp;&nbsp;{x}</li>)}</ol>}
              </div>
            ))}
          </div>
        </Col>
      ))}
    </PageShell>
  );
}
