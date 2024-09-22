import { Button } from "@/components/ui/button";
import { useApp, useTasks } from "@/lib/hooks/use-tasks";
import React, { useState } from 'react';
import { question_bank } from "./resources/problems";
import { ProblemStatus, type Problem as ProblemType } from "@/lib/problems.types";
import { CopilotTask, useCopilotContext, useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import { CopilotTextarea } from "@copilotkit/react-textarea";

export const Explanation = ({explanation}: {explanation: string}) => {
    return (
        <div className="mt-4 pt-4 space-y-2 bg-background p-4 rounded-md border">
            <CopilotTextarea className="border h-40 p-2 overflow-hidden" value={explanation} autosuggestionsConfig={{
                textareaPurpose: "text that displays the problem explanation", chatApiConfigs: {}
            }} readOnly></CopilotTextarea>
        </div>
    )
}

export default Explanation