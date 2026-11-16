---
title: "Connectivity testing and P0 design preparation"
date: 2026-11-15
authors: ["G30"]
status: "on-track"
tags: ["connectivity", "motor-testing", "power-supply", "CAD", "P0"]
---

## Goals

- Perform connectivity tests across the Raspberry Pi, ESP, motors, and network
- Begin investigating issues identified during motor-control testing
- Prepare for the Design Verification & Revision Checking meeting next week

## What we did

- Performed connectivity tests across the system and identified bugs for further investigation
- Tested motor commands from the Raspberry Pi through the ESP to the motors; found that, with the current wiring, the motors appear to spin in only one direction regardless of the command
- Order a power supply then received it late in the week, removing a major constraint on hardware testing (no more reliance on campus facility hours)
- Continued CAD work for the P0 peg board and component mounts
- Started preparing materials and design updates for next week's Design Verification & Revision Checking meeting

## Individual contributions

- **Trinity Hsu:** CADed the peg board and several mounts for P0, and completed battery calculations to support purchasing a power supply for the team
- **Hannah Lamarche:** Connected the Raspberry Pi to the team's Tailscale network and eduroam to make working with the Pi more portable; tested motor control from the Pi through the ESP to the motors; and began investigating the motor-direction issue
- **Dennis Lee:** Soldered the motor and other component connections, completed CAD for the P0 motor support, and selected the caster wheels to add to the order list
- **Leo You:** Completed CAD for the P0 Raspberry Pi and camera mounts, and began calibrating the stereo camera using a checker board

## Decisions / learnings

- End-to-end connectivity testing is exposing integration issues that need to be resolved before further system validation
- The current motor wiring or control configuration may be preventing direction changes, so the wiring and command path need to be checked systematically
- Tailscale and eduroam make it easier to work with the Raspberry Pi away from a fixed local setup
- Having a dedicated power supply provides more flexibility for testing schedules and reduces dependence on limited facility hours

## Blockers

- None

## Next

- Trace the motor-control path from the Raspberry Pi through the ESP and wiring to identify why reverse commands do not change direction
- Continue end-to-end connectivity and hardware testing with the new power supply
- Finalize the P0 CAD mounts and 3D print them
- Incorporate feedback from the Design Verification & Revision Checking meeting into the Final Design Presentation and Report
