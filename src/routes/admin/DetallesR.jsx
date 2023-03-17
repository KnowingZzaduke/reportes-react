import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  LabelList,
  YAxis,
} from "recharts";
import { archivos, COLORS, data } from "../../data/graph";
export function DetallesR() {
  return (
    <div className="content_detalles">
      <div className="content_titulo">
        <h1>Detalles</h1>
      </div>
      <div className="content_graficos">
        <div className="content_grafico-peso-archivos">
          <PieChart width={400} height={400}>
            <Pie
              data={archivos}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              startAngle={360}
              endAngle={0}
              innerRadius={60}
              outerRadius={150}
              fill="#8884d8"
              paddingAngle={5}
              label={(entry) => entry.name}
            >
              {archivos.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="content_descripcion">
            <p>
              En este gráfico podrás visualizar la cantidad de archivos subidos
              y el peso total de todos lo archivos subidos
            </p>
          </div>
        </div>
        <hr/>
        <div className="content_grafico-calificacion">
          <BarChart width={300} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis domain={[1, 5]} />
            <Bar dataKey="value" fill="#8884d8">
              <LabelList dataKey="value" position="top" />
            </Bar>
          </BarChart>
          <div className="content_descripcion">
            <p>
              En este gráfico podrás visualizar la calificación promedio que dan
              las personas sobre la experiencia de usuario que tuvieron al
              interactuar con la plataforma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
