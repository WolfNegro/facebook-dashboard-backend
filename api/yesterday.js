export default function handler(req, res) {
  const payload = {
    meta: {
      client: "clinica-martinez",
      range: "yesterday",
      currency: "PEN",
      last_updated: new Date().toISOString()
    },
    kpis: {
      spend_total: 12450,
      leads_total: 1247,
      cpl: 9.98,
      reach_total: 860000
    },
    donut: {
      title: "Distribución de Presupuesto por Objetivo",
      metric: "spend",
      labels: ["Website Leads", "Lead Forms", "Interacción", "Mensajes", "Reconocimiento"],
      values: [4880, 3735, 1245, 1245, 1245],
      percents: [40, 30, 10, 10, 10]
    },
    funnel: {
      title: "Embudo de Conversión",
      steps: [
        { name: "Impresiones", value: 2400000, width: 1.0 },
        { name: "Interacción", value: 192000, width: 0.08 },
        { name: "Alcance", value: 860000, width: 0.354 },
        { name: "Clics", value: 48000, width: 0.02 },
        { name: "Leads", value: 1247, width: 0.005 },
        { name: "Ventas", value: 187, width: 0.0008 }
      ]
    },
    campaigns_today: {
      title: "Campañas activas hoy",
      date: "2025-10-01",
      columns: ["campaign", "objective_type", "spend", "results", "cpr", "efficiency", "status"],
      rows: [
        ["Campaña Inmobiliaria Q4", "Lead Forms", 4250, 387, 11, 9, "activa"],
        ["Leads Financieros", "Website Leads", 3180, 298, 10.67, 8, "activa"]
      ]
    }
  };

  res.status(200).json(payload);
}
