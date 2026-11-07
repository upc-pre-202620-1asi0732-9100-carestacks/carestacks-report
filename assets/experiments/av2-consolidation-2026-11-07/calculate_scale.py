"""Reproduce planning scenarios; this script contains no participant observations."""

from math import ceil, sqrt
from statistics import NormalDist
import json


def planned_group_size(sigma: float, delta: float) -> dict:
    alpha = 0.05
    power = 0.80
    retention = 0.85
    z_alpha = NormalDist().inv_cdf(1 - alpha)
    z_power = NormalDist().inv_cdf(power)
    approximation = 2 * (z_alpha + z_power) ** 2 * sigma**2 / delta**2
    evaluable = ceil(approximation)
    recruit = ceil(evaluable / retention)
    return {
        "alpha_one_sided": alpha,
        "planning_power": power,
        "retention_assumption": retention,
        "sigma_assumption": sigma,
        "delta": delta,
        "normal_approximation_per_arm": approximation,
        "evaluable_per_arm": evaluable,
        "recruit_per_arm": recruit,
        "recruit_total": 2 * recruit,
        "approximate_power_at_evaluable_n": NormalDist().cdf(
            delta * sqrt(evaluable / 2) / sigma - z_alpha
        ),
    }


if __name__ == "__main__":
    result = {
        "status": "planning_scenarios_only_not_observed_data",
        "EXP-01": planned_group_size(sigma=0.5, delta=0.15),
        "EXP-02": planned_group_size(sigma=30, delta=10),
        "EXP-02_reference_mean_assumption_minutes": 25,
        "EXP-02_relative_improvement_target": 0.40,
    }
    result["total_distinct_circles_recruitment_target"] = sum(
        result[key]["recruit_total"] for key in ("EXP-01", "EXP-02")
    )
    print(json.dumps(result, ensure_ascii=False, indent=2))
