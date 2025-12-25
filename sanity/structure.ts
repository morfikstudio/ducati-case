import type { StructureResolver } from "sanity/structure"
import { ThListIcon, DesktopIcon } from "@sanity/icons"

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Ducati Case Studio")
    .items([
      S.listItem()
        .title("Annunci immobiliari")
        .icon(ThListIcon)
        .child(
          S.list()
            .title("Annunci immobiliari")
            .items([
              S.documentTypeListItem("residential").title("Immobili Abitativi"),
              // S.documentTypeListItem("commercial").title(
              //   "Negozi / Locali Commerciali",
              // ),
              // S.documentTypeListItem("office").title("Uffici / Coworking"),
              // S.documentTypeListItem("landPlots").title("Terreni"),
              // S.documentTypeListItem("warehouse").title("Magazzini / Depositi"),
              // S.documentTypeListItem("villa").title("Ville / Casali"),
              // S.documentTypeListItem("industrial").title(
              //   "Capannoni Industriali",
              // ),
            ]),
        ),
      S.listItem()
        .title("Contenuti sito")
        .icon(DesktopIcon)
        .child(
          S.list()
            .title("Contenuti sito")
            .items([S.documentTypeListItem("homePage").title("Home Page")]),
        ),
    ])
