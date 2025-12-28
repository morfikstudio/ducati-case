import { defineField, defineType, ALL_FIELDS_GROUP } from "sanity"
import { HomeIcon } from "@sanity/icons"

import {
  FLOOR_OPTS,
  CONCIERGE_SERVICE_OPTS,
  HEATING_SYSTEM_OPTS,
  ENERGY_CLASS_OPTS,
  FURNISHING_OPTS,
  GARDEN_OPTS,
  GARAGE_OPTS,
  PARKING_OPTS,
  POOL_OPTS,
  TENNIS_COURT_OPTS,
  AIR_CONDITIONING_OPTS,
} from "../../lib/constants/dataset"

import { createSelectWithCustomField } from "../../lib/helpers/createSelectWithCustomField"
import { createSelectWithAutoTitle } from "../../lib/helpers/createSelectWithAutoTitle"

export const residentialType = defineType({
  name: "residential",
  title: "Immobili Abitativi",
  type: "document",
  icon: HomeIcon,
  groups: [
    {
      ...ALL_FIELDS_GROUP,
      hidden: true,
    },
    { name: "location", title: "Località" },
    { name: "info", title: "Generali" },
    { name: "specs", title: "Specifiche" },
    { name: "download", title: "Download" },
    { name: "contents", title: "Contenuti" },
    { name: "all", title: "Tutti" },
  ],
  fields: [
    defineField({
      name: "address",
      title: "Indirizzo",
      type: "object",
      fields: [
        defineField({
          name: "country",
          type: "string",
          title: "Paese",
          initialValue: "Italia",
        }),
        defineField({
          name: "streetName",
          type: "string",
          title: "Indirizzo",
          validation: (rule) =>
            rule.custom((value) => {
              if (!value || value.trim() === "") {
                return "Campo richiesto"
              }
              return true
            }),
        }),
        defineField({
          name: "streetNumber",
          type: "string",
          title: "Numero Civico",
          validation: (rule) =>
            rule.custom((value) => {
              if (!value || value.trim() === "") {
                return "Campo richiesto"
              }
              return true
            }),
        }),
        defineField({
          name: "city",
          type: "string",
          title: "Città",
          validation: (rule) =>
            rule.custom((value) => {
              if (!value || value.trim() === "") {
                return "Campo richiesto"
              }
              return true
            }),
        }),
        defineField({
          name: "province",
          type: "string",
          title: "Provincia",
          description:
            "Sigla di due lettere maiuscole della Provincia in cui è situato l'immobile",
          initialValue: "",
          validation: (rule) =>
            rule.custom((value) => {
              if (value?.length !== 2 || !/^[A-Z]{2}$/.test(value)) {
                return "La sigla deve essere esattamente 2 lettere maiuscole (es. MI)"
              }
              return true
            }),
        }),
        defineField({
          name: "zip",
          type: "string",
          title: "CAP",
          description: "Codice di avviamento postale dell'immobile",
          initialValue: "",
        }),
      ],
      group: ["all", "location"],
    }),
    defineField({
      name: "map",
      type: "object",
      title: "Mappa",
      description:
        "Coordinate geografiche necessarie per la visualizzazione sulla mappa",
      fields: [
        defineField({
          name: "isActive",
          type: "boolean",
          title: "Attiva mappa",
          description: "Attiva per abilitare la visualizzazione della mappa",
          initialValue: false,
        }),
        defineField({
          name: "lat",
          type: "number",
          title: "Latitudine",
          hidden: ({ parent }) => !parent?.isActive,
        }),
        defineField({
          name: "lng",
          type: "number",
          title: "Longitudine",
          hidden: ({ parent }) => !parent?.isActive,
        }),
      ],
      group: ["all", "location"],
    }),
    defineField({
      name: "info",
      title: "Informazioni generali",
      type: "object",
      fields: [
        defineField({
          name: "price",
          title: "Prezzo (€)",
          type: "number",
        }),
        defineField({
          name: "locals",
          title: "Numero di locali",
          type: "number",
        }),
        defineField({
          name: "rooms",
          title: "Numero di camere",
          type: "number",
        }),
        defineField({
          name: "bathrooms",
          title: "Numero di bagni",
          type: "number",
        }),
        defineField({
          name: "privateNegotiation",
          title: "Trattativa Riservata",
          type: "boolean",
          initialValue: false,
        }),
      ],
      group: ["all", "info"],
    }),
    defineField({
      name: "mainSpecs",
      title: "Informazioni principali",
      type: "object",
      fields: [
        defineField({
          name: "commercialSquareMeters",
          title: "Superficie Commerciale (m²)",
          type: "number",
          validation: (rule) => rule.required().error("Campo richiesto"),
        }),
        defineField({
          name: "condominiumExpenses",
          title: "Spese condominiali annuali (€)",
          type: "number",
          validation: (rule) => rule.required().error("Campo richiesto"),
        }),
        createSelectWithCustomField({
          name: "floor",
          title: "Piano",
          options: FLOOR_OPTS,
        }),
        createSelectWithAutoTitle({
          name: "conciergeService",
          title: "Servizio portineria",
          options: CONCIERGE_SERVICE_OPTS,
        }),
        defineField({
          name: "constructionYear",
          title: "Anno di costruzione",
          type: "number",
          validation: (rule) => rule.required().error("Campo richiesto"),
        }),
        createSelectWithCustomField({
          name: "heatingSystem",
          title: "Riscaldamento",
          options: HEATING_SYSTEM_OPTS,
        }),
        createSelectWithCustomField({
          name: "energyClass",
          title: "Classe Energetica",
          options: ENERGY_CLASS_OPTS,
        }),
      ],
      group: ["all", "specs"],
    }),
    defineField({
      name: "additionalSpecs",
      title: "Informazioni aggiuntive",
      type: "object",
      fields: [
        createSelectWithCustomField({
          name: "furnishing",
          title: "Arredamento",
          options: FURNISHING_OPTS,
        }),
        createSelectWithAutoTitle({
          name: "garden",
          title: "Giardino",
          options: GARDEN_OPTS,
        }),
        createSelectWithAutoTitle({
          name: "garage",
          title: "Garage",
          options: GARAGE_OPTS,
        }),
        createSelectWithAutoTitle({
          name: "parking",
          title: "Posto Auto",
          options: PARKING_OPTS,
        }),
        defineField({
          name: "balcony",
          title: "Balcone",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "terrace",
          title: "Terrazza",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "cellar",
          title: "Cantina",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "attic",
          title: "Solaio",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "tavern",
          title: "Taverna",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "alarmSystem",
          title: "Impianto di Allarme",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "disabledAccess",
          title: "Accesso per disabili",
          type: "boolean",
          initialValue: false,
        }),
        createSelectWithAutoTitle({
          name: "airConditioning",
          title: "Impianto di Climatizzazione",
          options: AIR_CONDITIONING_OPTS,
        }),
        createSelectWithAutoTitle({
          name: "pool",
          title: "Piscina",
          options: POOL_OPTS,
        }),
        createSelectWithAutoTitle({
          name: "tennisCourt",
          title: "Campo da Tennis",
          options: TENNIS_COURT_OPTS,
        }),
      ],
      group: ["all", "specs"],
    }),
    defineField({
      name: "pdfFiles",
      title: "File PDF",
      type: "array",
      description:
        "Carica uno o più file PDF da rendere disponibili per il download",
      of: [
        {
          type: "file",
          options: {
            accept: ".pdf",
          },
        },
      ],
      group: ["all", "download"],
    }),
    defineField({
      name: "contents",
      title: "Contenuti Annuncio",
      type: "object",
      validation: (rule) =>
        rule.custom((value) => {
          if (!value || typeof value !== "object") {
            return "Tutti i campi devono essere compilati"
          }
          const hasExcerpt =
            value.excerpt &&
            typeof value.excerpt === "string" &&
            value.excerpt.trim() !== ""
          const hasDescription =
            value.description &&
            Array.isArray(value.description) &&
            value.description.length > 0
          const mainImage = value.mainImage as
            | {
                landscape?: unknown
                portrait?: unknown
              }
            | undefined
          const hasMainImage = mainImage?.landscape && mainImage?.portrait

          if (!hasExcerpt || !hasDescription || !hasMainImage) {
            return "Tutti i campi devono essere compilati"
          }
          return true
        }),
      fields: [
        defineField({
          name: "excerpt",
          type: "text",
          title: "Estratto (max 150 caratteri)",
          description: "Estratto della descrizione per le pagine di listing.",
          validation: (rule) =>
            rule.max(150).error("L'estratto non può superare i 150 caratteri"),
        }),
        defineField({
          name: "description",
          type: "array",
          title: "Descrizione",
          description: "Descrizione completa per la pagina annuncio.",
          of: [{ type: "block" }],
        }),
        defineField({
          name: "mainImage",
          title: "Immagine Principale",
          type: "object",
          fields: [
            {
              name: "landscape",
              title: "Desktop",
              type: "image",
            },
            {
              name: "portrait",
              title: "Mobile",
              type: "image",
            },
          ],
        }),
      ],
      group: ["all", "contents"],
    }),
  ],
  preview: {
    select: {
      address: "address",
      contents: "contents",
      media: "contents.mainImage.landscape",
    },
    prepare({ address, contents }) {
      const preview = {
        title: "Nuovo immobile residenziale",
        media: null,
      }

      if (
        address?.streetName &&
        address?.streetNumber &&
        address?.city &&
        address?.province
      ) {
        const { streetName, streetNumber, city, province } = address
        preview.title = `${streetName} ${streetNumber} - ${city} ${province}`
      }

      if (contents?.mainImage?.landscape) {
        preview.media = contents.mainImage.landscape
      }

      return preview
    },
  },
})
