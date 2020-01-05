import React from "react";
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Container", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Tolya"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Tolya");
    });

    test("span should be created ", () => {
        const component = create(<ProfileStatus status="Tolya"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("change to editMode ", () => {
        const component = create(<ProfileStatus status="Tolya"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Tolya");
    });




});