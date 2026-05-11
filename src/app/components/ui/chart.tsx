"use client";

import * as React from "react";
import * as Recharts from "recharts";
import { cn } from "./utils";

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};
// Type d’un item de légende
type LegendPayloadItem = {
  value?: string | number;
  type?: string;
  id?: string;
  color?: string;
  dataKey?: string | number;
};
const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within <ChartContainer>");
  return context;
}

// ChartContainer
function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & { config: ChartConfig; children: React.ReactNode }) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <Recharts.ResponsiveContainer>{children}</Recharts.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

// ChartStyle
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, c]) => c.color || c.theme);
  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) => {
            return `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, cfg]) => {
    const color = cfg.theme?.[theme as keyof typeof cfg.theme] || cfg.color;
    return color ? `--color-${key}:${color};` : null;
  })
  .join("\n")}
}
`;
          })
          .join("\n"),
      }}
    />
  );
};

// Types pour le TooltipContent
type TooltipItem = {
  value: any;
  name?: string;
  dataKey?: string;
  color?: string;
  payload?: Record<string, any>;
};

interface ChartTooltipContentProps {
  active?: boolean;
  payload?: TooltipItem[];
  className?: string;
  hideLabel?: boolean;
  nameKey?: string;
  labelKey?: string;
}

// ChartTooltipContent
function ChartTooltipContent({
  active,
  payload,
  className,
  nameKey,
}: ChartTooltipContentProps) {
  const { config } = useChart();

  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className={cn("rounded-lg border bg-white px-3 py-2 text-xs shadow", className)}>
      {payload.map((item, index) => {
        const key = `${nameKey || item.name || item.dataKey || "value"}`;
        const itemConfig = config[key as keyof typeof config] ?? {};
        const indicatorColor = item.payload?.fill || item.color || "#888";

        return (
          <div key={index} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: indicatorColor }}
              />
              <span className="text-gray-500">{itemConfig.label || item.name}</span>
            </div>
            <span className="font-mono font-medium">{item.value?.toLocaleString()}</span>
          </div>
        );
      })}
    </div>
  );
}

// ChartLegendContent
interface ChartLegendContentProps {
  payload?: LegendPayloadItem[];
}

function ChartLegendContent({ payload }: ChartLegendContentProps) {
  const { config } = useChart();
  if (!payload) return null;

  return (
    <div className="flex justify-center gap-4 pt-3">
      {payload.map((item:any, index:any) => {
        const key = `${item.dataKey || "value"}`;
        const itemConfig = config[key as keyof typeof config] ?? {};
        return (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            <span>{itemConfig.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export {
  ChartContainer,

  ChartTooltipContent,
 
  ChartLegendContent,
  ChartStyle,
};