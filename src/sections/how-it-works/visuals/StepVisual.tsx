import type { ProcessStepId } from "../how-it-works.content";
import { VisualAiDiscovery } from "./VisualAiDiscovery";
import { VisualAutoSequence } from "./VisualAutoSequence";
import { VisualCallReminder } from "./VisualCallReminder";
import { VisualHotLeadAlert } from "./VisualHotLeadAlert";
import { VisualLeadCapture } from "./VisualLeadCapture";
import { VisualRepClose } from "./VisualRepClose";

interface StepVisualProps {
  readonly stepId: ProcessStepId;
}

export function StepVisual({ stepId }: StepVisualProps) {
  switch (stepId) {
    case "capture":
      return <VisualLeadCapture />;
    case "qualify":
      return <VisualAiDiscovery />;
    case "followup":
      return <VisualAutoSequence />;
    case "alert":
      return <VisualHotLeadAlert />;
    case "close":
      return <VisualRepClose />;
    case "reminder":
      return <VisualCallReminder />;
    default:
      return null;
  }
}
